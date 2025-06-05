
'use client';

import type { FC } from 'react';
import { useEffect, useRef, useState }from 'react';
// import mermaid from 'mermaid'; // Original static import

interface MermaidDiagramProps {
  id: string; // Unique ID for each diagram
  title?: string;
  code: string;
}

const MermaidDiagram: FC<MermaidDiagramProps> = ({ id, title, code }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoadingModule, setIsLoadingModule] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const mermaidModule = useRef<any>(null); // Using useRef to store module to avoid re-triggering effects

  useEffect(() => {
    setIsMounted(true);
    import('mermaid')
      .then(mod => {
        mermaidModule.current = mod.default || mod; // mermaid might be default export or the module itself
        setIsLoadingModule(false);
      })
      .catch(err => {
        console.error("Failed to load mermaid module:", err);
        setHasError(true);
        setIsLoadingModule(false);
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = `<pre class="text-xs text-destructive-foreground bg-destructive/20 p-2 rounded whitespace-pre-wrap">Error loading mermaid library. Diagram code:\n${code.trim()}</pre>`;
        }
      });
  }, []); // Load module once on mount

  useEffect(() => {
    if (!isMounted || !mermaidRef.current || !code || isLoadingModule || !mermaidModule.current || hasError) {
      if (isMounted && !code && mermaidRef.current) {
        mermaidRef.current.innerHTML = `<div class="text-sm text-muted-foreground">No diagram code provided.</div>`;
      }
      return;
    }

    const initAndRenderMermaid = async () => {
      try {
        const isDarkMode = document.documentElement.classList.contains('dark');
        // Initialize if not already (Mermaid's initialize is typically global)
        // We might need a more robust way to ensure it's called once globally
        // or if it's safe to call multiple times.
        // For this component, let's call it before each render.
        mermaidModule.current.initialize({
            startOnLoad: false,
            theme: isDarkMode ? 'dark' : 'default',
            // securityLevel: 'loose', // Uncomment if dealing with HTML in nodes
        });
        
        const { svg, bindFunctions } = await mermaidModule.current.render(id, code.trim());
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = svg;
          if (bindFunctions) {
            bindFunctions(mermaidRef.current);
          }
        }
        setHasError(false); // Reset error state on successful render
      } catch (e) {
        console.error(`Error rendering mermaid diagram (id: ${id}):`, e);
        setHasError(true); // Set error state
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = `<pre class="text-xs text-destructive-foreground bg-destructive/20 p-2 rounded whitespace-pre-wrap">Error rendering diagram. Diagram code:\n${code.trim()}</pre>`;
        }
      }
    };

    initAndRenderMermaid();

  }, [code, id, isMounted, isLoadingModule, hasError]); // Rerun if these change

  let statusMessage = "";
  if (!isMounted) {
    statusMessage = "Initializing...";
  } else if (isLoadingModule) {
    statusMessage = "Loading diagram library...";
  } else if (hasError) {
    // Error message is already in mermaidRef.current by the effect
  } else if (!code) {
    statusMessage = "No diagram code provided.";
  }


  return (
    <div className="my-4 p-4 bg-muted rounded-lg overflow-x-auto">
      {title && <h4 className="font-semibold mb-2 text-sm text-muted-foreground">{title}</h4>}
      <div ref={mermaidRef} className="mermaid-render-area flex justify-center">
        {statusMessage && !hasError && <div className="text-sm text-muted-foreground">{statusMessage}</div>}
        {/* Content is rendered by useEffect. Error message will also be injected here. */}
      </div>
    </div>
  );
};

export default MermaidDiagram;

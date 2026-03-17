import { useEffect, useRef } from 'react';

export function AdBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if the script is already injected in this container
    const scriptSrc = 'https://pl28933543.effectivegatecpm.com/68963a5160d42f6daa410358980df4c0/invoke.js';
    const existingScript = containerRef.current.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = scriptSrc;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-4 overflow-hidden">
      <div className="w-full max-w-[320px] sm:max-w-[468px] md:max-w-[728px] max-h-[90px] overflow-hidden rounded-lg shadow-sm bg-slate-100 flex items-center justify-center">
        <div id="container-68963a5160d42f6daa410358980df4c0" ref={containerRef} className="scale-75 sm:scale-90 md:scale-100 origin-center"></div>
      </div>
    </div>
  );
}

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
    <div className="w-full flex justify-center my-6 overflow-hidden min-h-[50px]">
      <div id="container-68963a5160d42f6daa410358980df4c0" ref={containerRef}></div>
    </div>
  );
}

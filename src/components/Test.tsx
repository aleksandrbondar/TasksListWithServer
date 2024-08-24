import { useRef, useState, useEffect } from 'react';

function Test() {
  const [height, setHeight] = useState(0); // Для анимации высоты
  const [isExpanded, setIsExpanded] = useState(false); // Для контроля состояния анимации
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = (contentRef.current as HTMLElement).scrollHeight;
      console.log(contentHeight);
      setHeight(contentHeight);
    }
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button onClick={toggleExpand}>Toggle</button>
      <div
        style={{
          overflow: 'hidden',
          transition: 'height 1s ease',
          height: isExpanded ? `${height}px` : '0px',
        }}
      >
        <div ref={contentRef}>
          {/* Контент вашего компонента */}
          <p>Это содержимое компонента, которое будет анимироваться.</p>
          <p>Это содержимое компонента, которое будет анимироваться.</p>
          <p>Это содержимое компонента, которое будет анимироваться.</p>
          <p>Это содержимое компонента, которое будет анимироваться.</p>
          <p>Это содержимое компонента, которое будет анимироваться.</p>
          <p>Это содержимое компонента, которое будет анимироваться.</p>
          <p>Это содержимое компонента, которое будет анимироваться.</p>
          <p>Это содержимое компонента, которое будет анимироваться.</p>
          <h1>Это содержимое компонента, которое будет анимироваться.</h1>
        </div>
      </div>
    </div>
  );
}

export default Test;
import React, { useEffect } from 'react';

function Child2() {
  useEffect(() => {
    const mouseMove = () => {
      console.log('mouse moved...');
    };

    document.addEventListener('mousemove', mouseMove);

    // component will unmount
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return <div>Child2</div>;
}

export default Child2;

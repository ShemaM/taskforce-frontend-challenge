import React from 'react';

function RightCard({
  row_class,
  title_class,
  text_class,
  text,
  total_class,
  total,
  title,
  today,
}) {
  return (
    <div className={row_class}>
      <h3 className={title_class}>{today}</h3>
      <p className={text_class}>
        {row_class === 'rightCard-row' ? `New ${text}` : text}
      </p>
      <p className={total_class}>
        {row_class === 'rightCard-row' ? `Total ${total}` : total}
      </p>
    </div>
  );
}

export default RightCard;

import React from 'react';
import { Badge } from 'react-bootstrap';

type StatPillProps = {
  variant: string;
  content: number;
};

const StatPill: React.FC<StatPillProps> = ({ variant, content }) => {
  return (
    <Badge pill variant={variant}>
      {content}
    </Badge>
  );
};

export default StatPill;

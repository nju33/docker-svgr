module.exports = ({template}, opts, {jsx}) => {
  const typeScriptTpl = template.smart({plugins: ['typescript']});

  return typeScriptTpl.ast`
import React from 'react';

const Component: React.FC<React.SVGProps<SVGSVGElement>> = (props): JSX.Element => ${jsx};

export default Component;
    `;
};

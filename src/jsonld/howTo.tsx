import React from 'react';

import { JsonLd, JsonLdProps } from './jsonld';
import { setImage } from '../utils/schema/setImage';
import { setCost } from '../utils/schema/setCost';
import { setSupply } from '../utils/schema/setSupply';
import { setTool } from '../utils/schema/setTool';
import { setStep } from '../utils/schema/setStep';

import { PriceSpecification, Step } from '../types';

export interface HowToJsonLdProps extends JsonLdProps {
  name: string;
  image?: string;
  estimatedCost?: PriceSpecification;
  supply?: string[];
  tool?: string[];
  step: Step[];
  totalTime?: string;
}

function howToJsonLd({
  type = 'HowTo',
  keyOverride,
  image,
  estimatedCost,
  supply,
  tool,
  step,
  ...rest
}: HowToJsonLdProps) {
  const data = {
    ...rest,
    image: setImage(image),
    estimatedCost: setCost(estimatedCost),
    supply: setSupply(supply),
    tool: setTool(tool),
    step: setStep(step),
  };
  return (
    <JsonLd type={type} keyOverride={keyOverride} {...data} scriptKey="howTo" />
  );
}

export default howToJsonLd;

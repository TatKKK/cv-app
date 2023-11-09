import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Box from "../Box";

describe("Box", () => {
  it('should render the Box component', () => {
      render(
          <Box title="Box" content="Lorem ipsum dolor sit amet" />
      );
      expect(screen.getByText("Box")).toBeInTheDocument();
      expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  })
})

import clsx from 'clsx';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { useStyles } from './Pagination.styles';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Color } from '../types/Color';
import { clamp } from '../utils/clamp';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  adjacents?: number;
  classes?: Record<string, string>;
  color?: Color;
  getPageLabel?: (pageIndex: number) => React.ReactNode;
  next?: React.ReactNode;
  page?: number;
  previous: React.ReactNode;
  totalPages: number;
  onChangePage: (newPage: number) => void;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  function Pagination(
    props: PaginationProps,
    forwardedRef: React.Ref<HTMLDivElement>,
  ) {
    const {
      adjacents: defaultAdjacents,
      classes,
      color: defaultColor,
      getPageLabel,
      next: defaultNext,
      page: defaultPage,
      previous: defaultPrevious,
      totalPages,
      onChangePage,
      ...other
    } = props;

    const styles = useStyles();

    const adjacents = defaultAdjacents || 0;
    const color = defaultColor || 'primary';
    const next = defaultNext || (
      <Icon>
        <ChevronRight />
      </Icon>
    );
    const page = clamp(defaultPage || 0, 0, totalPages - 1);
    const previous = defaultPrevious || (
      <Icon>
        <ChevronLeft />
      </Icon>
    );

    let adjacentPageIndexes: number[] = [];

    if (adjacents) {
      const lowerAdjacentIndex = Math.max(
        Math.min(page - adjacents, totalPages - adjacents * 2 - 1),
        0,
      );

      const higherAdjacentIndex = Math.min(
        Math.max(page + 1 + adjacents, adjacents * 2 + 1),
        totalPages,
      );

      adjacentPageIndexes = Array.from({
        length: higherAdjacentIndex - lowerAdjacentIndex,
      }).map((_, pageIndex) => lowerAdjacentIndex + pageIndex);
    }

    return (
      <div
        {...other}
        role="navigation"
        aria-label="Paginated navigation"
        className={clsx(styles.root, classes?.root, props?.className)}
        ref={forwardedRef}
      >
        <Button
          aria-label="Go to previous page"
          className={clsx(styles.button, classes?.button)}
          disabled={page === 0}
          onClick={() => onChangePage(page - 1)}
        >
          {previous}
        </Button>
        {adjacentPageIndexes.map(pageIndex => (
          <Button
            aria-label={`Go to page ${pageIndex + 1}`}
            className={clsx(styles.button, classes?.button)}
            color={color}
            key={`pagination-${pageIndex}`}
            onClick={() => onChangePage(pageIndex)}
            variant={page === pageIndex ? 'solid' : 'standard'}
          >
            {getPageLabel ? getPageLabel(pageIndex) : `${pageIndex + 1}`}
          </Button>
        ))}
        <Button
          aria-label="Go to next page"
          className={clsx(styles.button, classes?.button)}
          disabled={totalPages === page + 1}
          onClick={() => onChangePage(page + 1)}
        >
          {next}
        </Button>
      </div>
    );
  },
);

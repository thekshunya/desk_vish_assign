import classNames from 'classnames';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={classNames('max-w-[1920px] px-8 ', className)}>
      {children}
    </div>
  );
};

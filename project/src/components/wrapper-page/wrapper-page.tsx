import { PropsWithChildren } from 'react';

type WrapperPageProps = PropsWithChildren <{elementClasses: string}>

function WrapperPage({elementClasses, children}: WrapperPageProps): JSX.Element {

  return (
    <div className={`page ${elementClasses}`}>
      {children}
    </div>
  );
}

export default WrapperPage;

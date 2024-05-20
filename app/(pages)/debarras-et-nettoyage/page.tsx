import dynamic from 'next/dynamic';

const RenderMobile = dynamic(() => import('./components/mobile/RenderMobile'));

type Props = {}
export default function page({ }: Props) {
  return (
    <>
      <RenderMobile />
    </>
  );
}
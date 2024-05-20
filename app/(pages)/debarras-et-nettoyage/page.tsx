import dynamic from 'next/dynamic';

const RenderMobile = dynamic(() => import('./components/mobile/RenderMobile'));
const RenderDesktop = dynamic(() => import('./components/desktop/RenderDesktop'));

type Props = {}
export default function page({ }: Props) {
  return (
    <>
      <RenderMobile />
      <RenderDesktop />
    </>
  );
}
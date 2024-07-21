import LiveBlocksProviders from "@/components/LiveBlocksProviders";

function PageLayout({ children }: { children: React.ReactNode }) {
  return <LiveBlocksProviders>{children}</LiveBlocksProviders>;
}
export default PageLayout;

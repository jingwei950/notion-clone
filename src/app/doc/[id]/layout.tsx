import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";

function DocLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  auth().protect(); //Redirect user if they are not authenticated

  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}
export default DocLayout;

"use client";

import {
  ClientSideSuspense,
  RoomProvider as RoomProviderWrapper,
} from "@liveblocks/react/suspense";
import LoadingSpinner from "./LoadingSpinner";
import LiverCursorProvider from "./LiverCursorProvider";

function RoomProvider({
  roomId,
  children,
}: {
  roomId: string;
  children: React.ReactNode;
}) {
  return (
    <RoomProviderWrapper
      id={roomId}
      initialPresence={{ cursor: null }}
    >
      <ClientSideSuspense fallback={<LoadingSpinner />}>
        <LiverCursorProvider>{children}</LiverCursorProvider>
      </ClientSideSuspense>
    </RoomProviderWrapper>
  );
}
export default RoomProvider;

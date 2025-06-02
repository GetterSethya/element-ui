import Message from "./message.svelte";
import Description from "./description.svelte";
import type { WithRef } from "@/lib/shared/types";

export type DescriptionProps = WithRef<HTMLSpanElement>;
export type MessageProps = Omit<WithRef<HTMLSpanElement>, "ref"> & {
  errors: (string | undefined)[];
};

export {
  //
  Message,
  Description,
};

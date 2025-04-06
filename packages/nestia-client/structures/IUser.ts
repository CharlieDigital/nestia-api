import type { Format } from "typia/lib/tags/Format";
import type { MinLength } from "typia/lib/tags/MinLength";
import type { Type } from "typia/lib/tags/Type";

/**
 * A user in the system
 */
export type IUser =
  /**
   * A user in the system
   */
  {
    id: number & Type<"int32">;
    name: string & MinLength<1>;
    email: string & Format<"email">;
  };

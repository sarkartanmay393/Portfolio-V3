import { createTypedHooks } from "easy-peasy";
import type GlobalStoreModel from "~/interfaces/globalStoreModel";

const typedHooks = createTypedHooks<GlobalStoreModel>();

export const { useStoreState, useStoreActions, useStoreDispatch } = typedHooks;

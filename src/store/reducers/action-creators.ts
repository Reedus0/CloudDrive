import { AuthActionCreators } from "./auth/action-creators";
import { FilesActionCreators } from "./files/action-creators";
import { PromptActionCreators } from "./prompt/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...PromptActionCreators,
  ...FilesActionCreators
}
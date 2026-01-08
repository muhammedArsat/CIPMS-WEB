export const MODAL_TEXT = {
  // 🔴 Destructive actions
  DELETE_TITLE: "Delete Confirmation",
  DELETE_MESSAGE: "Are you sure you want to delete this? This action cannot be undone.",
  DELETE_CONFIRM: "Delete",
  DELETE_CANCEL: "Cancel",

  // ⚠️ Warning
  WARNING_TITLE: "Are you sure?",
  WARNING_MESSAGE: "Please review this action before continuing.",
  WARNING_CONFIRM: "Proceed",
  WARNING_CANCEL: "Cancel",

  // ✅ Success
  SUCCESS_TITLE: "Success",
  SUCCESS_MESSAGE: "Your action was completed successfully.",
  SUCCESS_OK: "OK",

  // ❌ Error
  ERROR_TITLE: "Something went wrong",
  ERROR_MESSAGE: "We encountered an error. Please try again later.",
  ERROR_RETRY: "Retry",

  // 🔐 Auth
  SESSION_EXPIRED_TITLE: "Session Expired",
  SESSION_EXPIRED_MESSAGE:
    "Your session has expired. Please sign in again to continue.",
  SESSION_EXPIRED_CONFIRM: "Sign In",

  // 📤 Submit / Save
  SAVE_CHANGES_TITLE: "Save Changes",
  SAVE_CHANGES_MESSAGE: "Do you want to save the changes you made?",
  SAVE_CONFIRM: "Save",
  SAVE_CANCEL: "Discard",

  // 🚪 Exit / Navigation
  UNSAVED_CHANGES_TITLE: "Unsaved Changes",
  UNSAVED_CHANGES_MESSAGE:
    "You have unsaved changes. Are you sure you want to leave this page?",
  UNSAVED_CONFIRM: "Leave",
  UNSAVED_CANCEL: "Stay",

  // 👀 View / Info
  INFO_TITLE: "Information",
  INFO_MESSAGE: "Here are the details you requested.",
  INFO_CLOSE: "Close",
} as const;

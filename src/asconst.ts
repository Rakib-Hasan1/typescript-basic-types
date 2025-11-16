//*  as const assertion

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

/*
{
    readonly Admin: "Admin";
    readonly Editor: "Editor";
    readonly Viewer: "Viewer";

    1. typeof oparator
    2. keyof oparator

    const user = {
    id:222,
    name: "Rakib"
    }

    user["id"] >>> 222

    typeof user;

    {
    id: number;
    name:string;
    }

    typeof UserRoles

    {
    Admin :"Admin";
    Editor : "Editor";
    Viewer: "Viewer"
    }

    keyof typeof UserRoles
    'Admin'|'Editor'|'Viewer'

    "ADMIN" | "EDITOR" | "VIEWER"

    UserROles["Admin"] >>> "ADMIN"
    typeof UserRoles[keyof typeof UserRoles]

}
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

console.log(canEdit(UserRoles.Admin));

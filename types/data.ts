export type Member = {
    id?: number;
    name?: string;
    cargo?: string;
    email?: string;
    published?: boolean;
}

export enum ModalType {
    None,
    CreateMember,
    DeleteMember,
    UpdateMember,
    AboutMember,
  }

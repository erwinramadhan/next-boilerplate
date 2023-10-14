import { IError, IMeta, IPicture } from "./common-interface";

export default interface ITeamResponse {
  data: ITeamData[] | null;
  meta: IMeta | null;
  error: IError | null;
}

interface ITeamData {
  id: number;
  attributes: IAttributes;
}

interface IAttributes {
  name: string;
  secretCode: string;
  createdAt: string;
  updatedAt: string;
  teamLeader: string;
  phoneNumber: string;
  displayPicture: IPicture;
  photoTeamLeader: IPicture;
}

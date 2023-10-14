import ITeamResponse from "@/interfaces/response/team-response";
import { getFetch } from "@/lib/http-utils/app-fetch";

export async function getTeam(params?: IParameter): Promise<ITeamResponse> {
  try {
    const result = await getFetch("https://api.rajna.space/api/teams", params)

    const resultData: ITeamResponse = await result.json();
    return resultData;
  } catch (err: any) {
    const resultData: ITeamResponse = {
      data: null,
      error: {
        message: err.message,
        details: {},
        name: "Error catching internal",
        status: 500,
      },
      meta: null,
    };
    return resultData;
  }
}

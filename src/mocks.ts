// TODO: delete this.
import { TEAM_COLORS } from "./constants/constants";

const firstNamesMock = [
  "Go6o",
  "Petar",
  "Ivan",
  "Rado",
  "Evlogiy",
  "Evlampi",
  "Nikifor",
];

const lastNamesMock = [
  "Ivanov",
  "Petrov",
  "Georgiev",
  "Gospodinov",
  "Samarzshiev",
  "Otrovaliev",
  "Semenov",
];

const teamNamesMock = ["Gazey", "Aleko", "Ruen", "FE", "Strazhnik"];

export const mockTeams = teamNamesMock.map(n => ({
    id: `${Math.random() * 100}`,
    name: n,
    color: Object.keys(TEAM_COLORS)[Math.floor(Math.random()*Object.keys(TEAM_COLORS).length)]
}))

export const createMockDev = (team?: typeof mockTeams[number]) => ({
    id : `${Math.random() * 100}`,
    firstName : firstNamesMock[Math.floor(Math.random() * firstNamesMock.length)],
    lastName : lastNamesMock[Math.floor(Math.random() * lastNamesMock.length)],
    techLead : Boolean(Math.round(Math.random())),
    active : Boolean(Math.round(Math.random())),
    team : team || mockTeams[Math.floor(Math.random() * mockTeams.length)]
})

// all files
//./Bridge/Orbital EMS Strike.svg
//./Bridge/Tesla Tower.svg
//./Bridge/HMG Emplacement.svg
//./Bridge/Orbital Smoke Strike.svg
//./Bridge/Orbital Gas Strike.svg
//./Bridge/Shield Generator Relay.svg
//./Bridge/Orbital Precision Strike.svg
//./Patriotic Administration Center
//./Patriotic Administration Center/Expendable Anti-Tank.svg
//./Patriotic Administration Center/Machine Gun.svg
//./Patriotic Administration Center/Autocannon.svg
//./Patriotic Administration Center/Heavy Machine Gun.svg
//./Patriotic Administration Center/Anti-Materiel Rifle.svg
//./Patriotic Administration Center/Spear.svg
//./Patriotic Administration Center/Flamethrower.svg
//./Patriotic Administration Center/Stalwart.svg
//./Patriotic Administration Center/Recoilless Rifle.svg
//./Patriotic Administration Center/Railgun.svg
//./Robotics Workshop/Machine Gun Sentry.svg
//./Robotics Workshop/Guard Dog.svg
//./Robotics Workshop/Gatling Sentry.svg
//./Robotics Workshop/Rocket Sentry.svg
//./Robotics Workshop/Patriot Exosuit.svg
//./Robotics Workshop/Autocannon Sentry.svg
//./Robotics Workshop/Mortar Sentry.svg
//./Robotics Workshop/EMS Mortar Sentry.svg

import AntiPersonnelMinefield from "./assets/stratagems/Engineering Bay/Anti-Personnel Minefield.svg";
import ArcThrower from "./assets/stratagems/Engineering Bay/Arc Thrower.svg";
import BallisticShieldBackpack from "./assets/stratagems/Engineering Bay/Ballistic Shield Backpack.svg";
import GrenadeLauncher from "./assets/stratagems/Engineering Bay/Grenade Launcher.svg";
import GuardDogRover from "./assets/stratagems/Engineering Bay/Guard Dog Rover.svg";
import IncendiaryMines from "./assets/stratagems/Engineering Bay/Incendiary Mines.svg";
import LaserCannon from "./assets/stratagems/Engineering Bay/Laser Cannon.svg";
import QuasarCannon from "./assets/stratagems/Engineering Bay/Quasar Cannon.svg";
import ShieldGeneratorPack from "./assets/stratagems/Engineering Bay/Shield Generator Pack.svg";
import SupplyPack from "./assets/stratagems/Engineering Bay/Supply Pack.svg";

import Hellbomb from "./assets/stratagems/General Stratagems/Hellbomb.svg";
import OrbitalIlluminationFlare from "./assets/stratagems/General Stratagems/Orbital Illumination Flare.svg";
import ProspectingDrill from "./assets/stratagems/General Stratagems/Prospecting Drill.svg";
import Reinforce from "./assets/stratagems/General Stratagems/Reinforce.svg";
import Resupply from "./assets/stratagems/General Stratagems/Resupply.svg";
import SEAFArtillery from "./assets/stratagems/General Stratagems/SEAF Artillery.svg";
import SeismicProbe from "./assets/stratagems/General Stratagems/Seismic Probe.svg";
import SOSBeacon from "./assets/stratagems/General Stratagems/SOS Beacon.svg";
import SuperEarthFlag from "./assets/stratagems/General Stratagems/Super Earth Flag.svg";
import UploadData from "./assets/stratagems/General Stratagems/Upload Data.svg";

import EagleAirstrike from "./assets/stratagems/Hangar/Eagle Airstrike.svg";
import Eagle110MMRocketPods from "./assets/stratagems/Hangar/Eagle 110MM Rocket Pods.svg";
import Eagle500KGBomb from "./assets/stratagems/Hangar/Eagle 500KG Bomb.svg";
import EagleClusterBomb from "./assets/stratagems/Hangar/Eagle Cluster Bomb.svg";
import EagleNapalmAirstrike from "./assets/stratagems/Hangar/Eagle Napalm Airstrike.svg";
import EagleRearm from "./assets/stratagems/Hangar/Eagle Rearm.svg";
import EagleSmokeStrike from "./assets/stratagems/Hangar/Eagle Smoke Strike.svg";
import EagleStrafingRun from "./assets/stratagems/Hangar/Eagle Strafing Run.svg";
import JumpPack from "./assets/stratagems/Hangar/Jump Pack.svg";

import Orbital120MMHEBarrage from "./assets/stratagems/Orbital Cannons/Orbital 120MM HE Barrage.svg";
import Orbital380MMHEBarrage from "./assets/stratagems/Orbital Cannons/Orbital 380MM HE Barrage.svg";
import OrbitalAirburstStrike from "./assets/stratagems/Orbital Cannons/Orbital Airburst Strike.svg";
import OrbitalGatlingBarrage from "./assets/stratagems/Orbital Cannons/Orbital Gatling Barrage.svg";
import OrbitalLaser from "./assets/stratagems/Orbital Cannons/Orbital Laser.svg";
import OrbitalRailcannonStrike from "./assets/stratagems/Orbital Cannons/Orbital Railcannon Strike.svg";
import OrbitalWalkingBarrage from "./assets/stratagems/Orbital Cannons/Orbital Walking Barrage.svg";


export default [
  {
    id: 0x10,
    name: 'Eagle Airstrike',
    image: EagleAirstrike,
    command: 'URDR'
  },
  {
    id: 0x11,
    name: 'Eagle 110MM Rocket Pods',
    image: Eagle110MMRocketPods,
    command: 'URUL'
  },
  {
    id: 0x12,
    name: 'Eagle 500KG Bomb',
    image: Eagle500KGBomb,
    command: 'URDDD'
  },
  {
    id: 0x13,
    name: 'Eagle Cluster Bomb',
    image: EagleClusterBomb,
    command: 'URDDR'
  },
  {
    id: 0x14,
    name: 'Eagle Napalm Airstrike',
    image: EagleNapalmAirstrike,
    command: 'URDU'
  },
  {
    id: 0x15,
    name: 'Eagle Rearm',
    image: EagleRearm,
    command: 'UULUR'
  },
  {
    id: 0x16,
    name: 'Eagle Smoke Strike',
    image: EagleSmokeStrike,
    command: 'URUD'
  },
  {
    id: 0x17,
    name: 'Eagle Strafing Run',
    image: EagleStrafingRun,
    command: 'URR'
  },
  {
    id: 0x18,
    name: 'Jump Pack',
    image: JumpPack,
    command: 'DUUDU'
  },
  {
    id: 0x20,
    name: 'Orbital 120MM HE Barrage',
    image: Orbital120MMHEBarrage,
    command: 'RRDLRD'
  },
  {
    id: 0x21,
    name: 'Orbital 380MM HE Barrage',
    image: Orbital380MMHEBarrage,
    command: 'RDUULDD'
  },
  {
    id: 0x22,
    name: 'Orbital Airburst Strike',
    image: OrbitalAirburstStrike,
    command: 'RRR'
  },
  {
    id: 0x23,
    name: 'Orbital Gatling Barrage',
    image: OrbitalGatlingBarrage,
    command: 'RDLUU'
  },
  {
    id: 0x24,
    name: 'Orbital Laser',
    image: OrbitalLaser,
    command: 'RDURD'
  },
  {
    id: 0x25,
    name: 'Orbital Railcannon Strike',
    image: OrbitalRailcannonStrike,
    command: 'RUDDR'
  },
  {
    id: 0x26,
    name: 'Orbital Walking Barrage',
    image: OrbitalWalkingBarrage,
    command: 'RDRDRD'
  },
  {
    id: 0x30,
    name: 'Anti-Personnel Minefield',
    image: AntiPersonnelMinefield,
    command: 'DLUR'
  },
  {
    id: 0x31,
    name: 'Arc Thrower',
    image: ArcThrower,
    command: 'DRDULL'
  },
  {
    id: 0x32,
    name: 'Ballistic Shield Backpack',
    image: BallisticShieldBackpack,
    command: 'DLDDUL'
  },
  {
    id: 0x33,
    name: 'Grenade Launcher',
    image: GrenadeLauncher,
    command: 'DLULD'
  },
  {
    id: 0x34,
    name: 'Guard Dog Rover',
    image: GuardDogRover,
    command: 'DULURR',
  },
  {
    id: 0x35,
    name: 'Incendiary Mines',
    image: IncendiaryMines,
    command: 'DLLD'
  },
  {
    id: 0x36,
    name: 'Laser Cannon',
    image: LaserCannon,
    command: 'DLDUL'
  },
  {
    id: 0x37,
    name: 'Quasar Cannon',
    image: QuasarCannon,
    command: 'DDULR'
  },
  {
    id: 0x38,
    name: 'Shield Generator Pack',
    image: ShieldGeneratorPack,
    command: 'DULRLR'
  },
  {
    id: 0x39,
    name: 'Supply Pack',
    image: SupplyPack,
    command: 'DLDUUD'
  },
  ///
  {
    id: 0x40,
    name: 'Hellbomb  -- ?',
    image: Hellbomb,
    command: 'DURDULDU'
  },
  {
    id: 0x41,
    name: 'Orbital Illumination Flare / Illumination Flare ??',
    image: OrbitalIlluminationFlare,
    command: 'RRLL'
  },
  {
    id: 0x42,
    name: 'Prospecting Drill',
    image: ProspectingDrill,
    command: ''
  },
  {
    id: 0x43,
    name: 'Reinforce',
    image: Reinforce,
    command: 'UDRLU'
  },
  {
    id: 0x44,
    name: 'Resupply',
    image: Resupply,
    command: 'DDUR'
  },
  {
    id: 0x45,
    name: 'SEAF Artillery',
    image: SEAFArtillery,
    command: 'RUUD'
  },
  {
    id: 0x46,
    name: 'Seismic Probe',
    image: SeismicProbe,
    command: 'UUDLDD'
  },
  {
    id: 0x47,
    name: 'SOS Beacon',
    image: SOSBeacon,
    command: 'UDRU'
  },
  {
    id: 0x48,
    name: 'Super Earth Flag',
    image: SuperEarthFlag,
    command: 'DUDU'
  },
  {
    id: 0x49,
    name: 'Upload Data',
    image: UploadData,
    command: 'LRUUU'
  },
  {
    id: 0x4A,
    name: 'SSSD Delivery',
    image: UploadData,
    command: 'DDDUU'
  }
];

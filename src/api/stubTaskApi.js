import delay from './delay';
import UUID from 'uuid-js';
import userApi from "./stubUserApi";

const tasks = [
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "done",
    "description": "Eiusmod non in anim aliqua elit fugiat. Sunt qui laboris do consectetur fugiat. Enim magna aute voluptate in. Adipisicing consectetur aliqua cillum ex est aliquip officia. Enim cillum duis fugiat commodo nulla.",
    "title": "cupidatat ex velit Lorem officia",
    "projectId": "8736fa7d-9563-41f9-982e-603e7fedd94b",
    "id": "15dd0cd8-bf44-429c-8373-1f6ba05a16bd"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "In progress",
    "description": "Laboris veniam nisi qui reprehenderit tempor qui ex. Pariatur pariatur exercitation magna ea. Do esse eiusmod laboris eu aute nulla cupidatat qui. Incididunt amet quis aliquip ad magna do Lorem sint do officia laborum incididunt reprehenderit mollit. Culpa pariatur dolor elit ipsum mollit laboris sit consectetur tempor esse.",
    "title": "Lorem aliqua magna aliqua voluptate",
    "projectId": "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    "id": "f224eabc-bef6-4aba-80bf-99b77047da77"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "done",
    "description": "Esse ea occaecat tempor proident sit in fugiat id deserunt excepteur in dolore. Deserunt nisi fugiat velit irure. Commodo sunt anim dolore ut adipisicing eu non velit occaecat incididunt nulla excepteur dolor. Ut consectetur ad commodo aliqua. Cupidatat do dolore consectetur tempor enim nostrud officia nulla officia excepteur reprehenderit elit.",
    "title": "consequat qui ex proident esse",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "3658dee5-9828-41d8-97f2-f77e0a7a238e"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "In progress",
    "description": "Dolor deserunt tempor adipisicing quis cupidatat irure non mollit. Proident ipsum ullamco qui nisi commodo minim id irure. Est eu sit cillum officia fugiat amet eu elit. Cillum est cupidatat sit do deserunt consectetur officia dolor. Ad irure proident consectetur est exercitation labore.",
    "title": "deserunt excepteur anim irure ex",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "4bcc41af-cb6d-454e-b799-8b6fbfd0e938"
  },
  {
    "assignedTo": {
      "id": "01548079-205a-4367-848c-3a4155ad31a6"
    },
    "state": "done",
    "description": "Ipsum occaecat esse ut ea in amet. Velit qui minim pariatur esse magna labore. Quis eiusmod esse tempor sunt adipisicing minim qui elit aute. Nulla sint reprehenderit nisi fugiat ea sunt duis consequat fugiat minim cupidatat quis. Magna ut non aliquip commodo nisi ullamco enim et officia aute cillum aliqua.",
    "title": "dolor eu nulla duis reprehenderit",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "0e795c10-8ee6-4880-8315-c416bdada6b6"
  },
  {
    "assignedTo": {
      "id": "01548079-205a-4367-848c-3a4155ad31a6"
    },
    "state": "To do",
    "description": "Deserunt velit do non sunt reprehenderit ex cillum in tempor incididunt. Fugiat eiusmod id fugiat ex velit aliquip tempor dolore ut et. Anim ut sunt ad fugiat ex mollit anim incididunt est sunt. Eu quis occaecat irure commodo est. Id amet excepteur consequat dolor aliqua.",
    "title": "nisi commodo consectetur ea nulla",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "47fc8e33-dcf9-45d8-8796-bea22038658d"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "done",
    "description": "Sunt duis irure est non nostrud. Aliquip elit in non minim ullamco eu et. Sunt labore dolor exercitation officia dolor. Irure voluptate et non nulla aute amet ad ex ullamco ullamco ad laborum. Lorem reprehenderit exercitation elit Lorem ex ea laboris in.",
    "title": "cillum non dolore duis eu",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "f93ac9dc-2c31-48ca-8117-4a64b65fb4ee"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "In progress",
    "description": "Ullamco irure anim commodo tempor ad. Reprehenderit cupidatat excepteur enim qui laborum amet ut dolor exercitation excepteur. Duis nostrud incididunt ullamco ex. Est velit sunt dolore duis esse qui cupidatat in nulla cupidatat. Nisi consectetur cupidatat anim sit reprehenderit eiusmod et aute ipsum adipisicing occaecat.",
    "title": "mollit eiusmod id consectetur nostrud",
    "projectId": "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    "id": "f8e364d8-2d8c-482a-a526-f0b696ec95f6"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "In progress",
    "description": "Quis dolore est ut tempor incididunt labore esse duis sunt. In ipsum aute veniam ea in tempor aute incididunt. Voluptate laborum officia nulla dolore ipsum ut tempor. Nulla amet mollit dolore ad anim commodo nulla consequat proident ea commodo. Exercitation amet laboris dolore aliqua ex ea.",
    "title": "commodo cupidatat qui adipisicing labore",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "78fbad09-2e29-42ea-95a8-3c028a0214f4"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "To do",
    "description": "Lorem esse Lorem culpa veniam incididunt est elit adipisicing cupidatat labore quis mollit sunt esse. Exercitation id voluptate in nulla laboris exercitation duis ad sint. Dolore veniam do qui veniam ad proident qui. Ea commodo do eiusmod dolore. Pariatur deserunt ad ex veniam quis excepteur.",
    "title": "magna proident tempor magna aute",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "e9fd86db-ac37-459e-a7a0-746400f200b9"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "done",
    "description": "Consectetur velit laborum non tempor dolor eu do. Sunt aliquip eiusmod enim ex Lorem nulla ipsum ut tempor ut do in dolore officia. Culpa non ipsum excepteur sit nisi mollit id nostrud officia enim nisi est enim pariatur. Et quis quis in irure aute minim et incididunt ut adipisicing. Ullamco incididunt amet ex dolore in magna magna excepteur consequat ad.",
    "title": "qui in officia elit est",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "419ddeb9-70b0-434b-9c58-66e9e6653d88"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "done",
    "description": "Ad exercitation pariatur dolor ea deserunt sit nisi. Reprehenderit dolor ea eu ea qui. Excepteur pariatur laborum velit cillum esse aute. In quis aute sint incididunt quis incididunt aliquip. Aliquip pariatur ut aliqua magna amet quis elit.",
    "title": "velit sit officia culpa irure",
    "projectId": "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    "id": "0d4184c5-9b44-4f16-af85-34da9b39772a"
  },
  {
    "assignedTo": {
      "id": "01548079-205a-4367-848c-3a4155ad31a6"
    },
    "state": "To do",
    "description": "Ex mollit laborum aliqua velit sint est nostrud anim et cillum deserunt tempor consequat consequat. Sunt do sint duis amet. Eiusmod adipisicing duis officia fugiat. Eu esse tempor duis id pariatur et exercitation ex. Ullamco do laboris enim sunt ex consectetur deserunt laboris ea cillum.",
    "title": "eiusmod culpa ipsum veniam velit",
    "projectId": "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    "id": "9404662e-c994-4b45-acbf-56f621d1a689"
  },
  {
    "assignedTo": {
      "id": "01548079-205a-4367-848c-3a4155ad31a6"
    },
    "state": "In progress",
    "description": "Aute adipisicing est anim et dolore. Labore non occaecat officia quis aliquip deserunt. Irure deserunt velit commodo laborum quis deserunt quis velit velit nisi aute consequat nisi dolor. Eu ex laboris sit ullamco Lorem. Laboris dolore nostrud aute quis voluptate dolor Lorem quis qui ex esse.",
    "title": "sint minim nulla magna adipisicing",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "a1949611-5be0-4080-85de-582739fe0100"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "To do",
    "description": "Cillum nostrud elit ullamco dolor est enim est velit cupidatat amet nostrud incididunt. Velit Lorem qui veniam consequat enim ut est deserunt aliqua sunt reprehenderit. Deserunt reprehenderit commodo anim commodo fugiat fugiat quis cupidatat culpa ut. Mollit quis quis voluptate excepteur. In elit fugiat eiusmod incididunt mollit mollit.",
    "title": "aute minim officia ex veniam",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "06f37593-61fd-42b1-80d8-479ab275a9a6"
  },
  {
    "assignedTo": {
      "id": "01548079-205a-4367-848c-3a4155ad31a6"
    },
    "state": "To do",
    "description": "Voluptate consectetur non est laboris sint minim eu. Et deserunt non eiusmod laborum ex nostrud deserunt proident cupidatat cupidatat pariatur dolore aliquip aute. Velit est dolor nisi tempor ea culpa amet officia. Officia pariatur proident est et proident voluptate. Tempor cupidatat elit non ullamco laboris velit nulla laboris do ipsum quis.",
    "title": "amet non laborum eu occaecat",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "5053268c-01b2-46f5-8dcc-e68d55ee9ee0"
  },
  {
    "assignedTo": {
      "id": "01548079-205a-4367-848c-3a4155ad31a6"
    },
    "state": "To do",
    "description": "Reprehenderit ad esse aliquip ea aute nulla reprehenderit eiusmod. Qui sit ullamco elit culpa quis tempor. Pariatur consequat dolor ad ipsum. Ad pariatur anim ullamco reprehenderit pariatur excepteur nulla esse. Aliqua excepteur eiusmod adipisicing ipsum eu laborum in.",
    "title": "eu incididunt pariatur quis eiusmod",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "dccb6f45-b3c9-4d7f-afd6-7b9df42364dc"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "done",
    "description": "Labore est nulla cupidatat elit elit. Est aliqua dolor ad fugiat magna. In ipsum enim proident pariatur excepteur in. Pariatur laborum ipsum in sit ullamco. Exercitation eu laborum in do ea magna velit consequat exercitation elit deserunt adipisicing pariatur dolore.",
    "title": "minim enim ex cupidatat et",
    "projectId": "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    "id": "811535a4-8b6b-4b13-a0eb-e348072bbeb7"
  },
  {
    "assignedTo": {
      "id": "01548079-205a-4367-848c-3a4155ad31a6"
    },
    "state": "To do",
    "description": "Eiusmod adipisicing duis laborum duis exercitation eu culpa et amet commodo sit amet. Anim exercitation excepteur id mollit et ex reprehenderit et laboris proident tempor. Adipisicing aute cillum qui ullamco do minim sunt labore laboris labore eiusmod deserunt voluptate. Laboris nulla eu consequat esse. Officia ea reprehenderit eu velit irure enim mollit consectetur sit nostrud.",
    "title": "id culpa consequat eu eiusmod",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "cbf0927a-a085-4320-913c-64642ad8a05c"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "To do",
    "description": "Aute fugiat nostrud dolor fugiat aute irure tempor nisi voluptate do eu. Anim sint officia incididunt culpa ea. Ea exercitation cillum deserunt sint sit eiusmod aliqua enim laboris. Excepteur in laboris consequat id exercitation eu anim exercitation laborum. Exercitation laborum laborum aliqua adipisicing officia nisi consequat adipisicing veniam duis adipisicing aute velit quis.",
    "title": "minim excepteur aute ex qui",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "da3d737f-2a78-465f-ba27-deea14717018"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "To do",
    "description": "Exercitation laborum amet ad magna elit ex ipsum irure tempor ex. Mollit incididunt nulla consectetur do voluptate consectetur occaecat cupidatat. Deserunt cupidatat cillum tempor qui incididunt irure ex ad irure sunt. Anim nisi quis velit aliqua aliqua elit excepteur incididunt mollit occaecat tempor pariatur ut sit. Do quis aliqua minim ullamco voluptate.",
    "title": "elit ullamco ipsum commodo fugiat",
    "projectId": "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    "id": "9418fe97-17cf-48e7-9a57-f97ad6f81bea"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "done",
    "description": "Enim cupidatat ullamco consectetur laboris quis ipsum et id magna consequat exercitation voluptate. Consequat esse culpa cupidatat exercitation qui ipsum. Nisi et Lorem mollit commodo veniam tempor ea. Labore ex non esse elit. Exercitation elit est voluptate fugiat ut deserunt adipisicing ut commodo commodo quis reprehenderit qui.",
    "title": "velit dolor et laborum dolor",
    "projectId": "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    "id": "92ab11ea-ce34-42c3-8050-9d9846790f67"
  },
  {
    "assignedTo": {
      "id": "01548079-205a-4367-848c-3a4155ad31a6"
    },
    "state": "done",
    "description": "Veniam eiusmod veniam anim deserunt in exercitation laborum laboris. Ipsum est et consequat ut Lorem et occaecat cillum Lorem velit deserunt mollit laboris id. Qui elit incididunt Lorem in officia. Irure et adipisicing nulla sint. Commodo amet sit velit aliqua deserunt.",
    "title": "fugiat eu do aute incididunt",
    "projectId": "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    "id": "9356f214-f66b-47ce-911f-abcdafc5e4b0"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "done",
    "description": "In id sit elit excepteur. Incididunt reprehenderit laborum enim exercitation do irure. Pariatur sit tempor incididunt sit reprehenderit consequat qui qui. Cillum eiusmod aliquip ea cupidatat reprehenderit amet laborum. Commodo nisi aliqua nulla magna amet ipsum ad in sit dolore consectetur.",
    "title": "consequat aute esse dolore occaecat",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "8f746623-a1e2-48c7-8813-cf2a3d0a4a53"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "done",
    "description": "Aliqua nisi ullamco elit adipisicing. Minim officia ut do aliquip est elit magna. Anim tempor laboris labore ipsum voluptate est. Fugiat nostrud ex cupidatat veniam veniam sunt ex ex reprehenderit non. Labore tempor exercitation in quis laborum incididunt tempor incididunt culpa quis dolor enim do.",
    "title": "sint esse nulla ex dolor",
    "projectId": "8736fa7d-9563-41f9-982e-603e7fedd94b",
    "id": "1af38b67-9a62-4d1a-a232-2a78a0ed4790"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "In progress",
    "description": "Dolore laboris labore incididunt veniam elit consectetur occaecat exercitation incididunt consectetur nulla aliqua aliquip. Anim anim incididunt Lorem sit esse laboris. Et esse velit dolor nisi consequat duis fugiat qui do ipsum. Voluptate minim fugiat excepteur ex duis do in quis anim elit. Magna non minim commodo labore officia consectetur velit enim.",
    "title": "sunt dolor occaecat excepteur enim",
    "projectId": "8736fa7d-9563-41f9-982e-603e7fedd94b",
    "id": "370187b1-3246-4f8a-a216-f172fce56c5a"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "To do",
    "description": "Anim deserunt enim aliqua consequat irure enim pariatur anim nostrud sit. Non sit sunt in est sint. Voluptate proident do eiusmod exercitation. Reprehenderit est Lorem consectetur commodo do id cupidatat sunt eu exercitation ad. Commodo ex elit eiusmod Lorem amet elit deserunt eiusmod fugiat nostrud.",
    "title": "eiusmod exercitation nisi eu eu",
    "projectId": "8736fa7d-9563-41f9-982e-603e7fedd94b",
    "id": "6a72004e-c31e-4a70-a2fb-1069a053ade2"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "To do",
    "description": "Fugiat ut consequat eu fugiat voluptate. Et eiusmod dolore aute Lorem laboris nulla ad. Duis excepteur reprehenderit reprehenderit ex amet sint est. Occaecat adipisicing id cupidatat laborum labore ullamco nulla nisi sint in aliquip. Elit ut anim pariatur Lorem aute nisi tempor reprehenderit ad commodo est labore sunt.",
    "title": "sunt occaecat cupidatat aute enim",
    "projectId": "8736fa7d-9563-41f9-982e-603e7fedd94b",
    "id": "b6ad8300-76f0-43ee-98d6-3b14ec87562f"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "done",
    "description": "Tempor ullamco culpa ex dolore minim. Eiusmod ex quis ea culpa ut ipsum velit elit Lorem anim nulla et. Do cupidatat culpa aliqua sunt nulla. Labore dolor aliquip sunt in non enim ad deserunt voluptate sit in voluptate exercitation nulla. Non ad sint excepteur excepteur deserunt cupidatat magna quis magna.",
    "title": "magna fugiat anim irure reprehenderit",
    "projectId": "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    "id": "105f4bb3-2057-4ae7-aa4c-25bd6acbba32"
  },
  {
    "assignedTo": {
      "id": "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
    },
    "state": "In progress",
    "description": "Commodo sit nulla proident sunt nisi qui nostrud adipisicing culpa ea eiusmod sunt in laboris. Eu sunt sit dolore sunt ea Lorem incididunt. Minim veniam in cupidatat Lorem ex sunt. Irure reprehenderit exercitation pariatur et Lorem nostrud tempor est. Exercitation duis dolor velit ut excepteur.",
    "title": "minim nisi elit magna qui",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "70b128b2-9556-4a0b-a0f1-379c470e463b"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "done",
    "description": "Tempor exercitation ad voluptate tempor officia. Adipisicing Lorem nisi nulla deserunt ipsum cillum dolor et enim occaecat. Exercitation adipisicing consequat esse tempor dolore labore id sint aute cupidatat voluptate nisi ullamco dolore. Labore ad anim dolor nisi. Ad dolor ex magna minim reprehenderit ullamco laboris quis proident qui mollit tempor.",
    "title": "est velit do id voluptate",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "dcd82080-50e5-4297-a76e-36a2cd4cc1ab"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "done",
    "description": "Ea et enim ex mollit exercitation qui sit aute do exercitation aliquip. Proident nostrud ex minim ad sit aute voluptate ea voluptate minim. Voluptate sunt cillum sint nisi cupidatat quis dolor do dolor in voluptate qui eiusmod. Nostrud cillum nostrud officia magna nostrud. Labore velit pariatur id nulla commodo non officia quis pariatur reprehenderit laborum in.",
    "title": "ullamco proident cillum amet magna",
    "projectId": "04d1a05f-d511-45a6-8fe1-544224ea5657",
    "id": "2c071668-560e-42e7-9626-0cd447acd1a3"
  },
  {
    "assignedTo": {
      "id": "01548079-205a-4367-848c-3a4155ad31a6"
    },
    "state": "done",
    "description": "Cupidatat sint laboris dolore non laboris fugiat dolore nostrud minim voluptate mollit. Esse magna aute laboris do laboris fugiat non culpa officia reprehenderit do ut esse cillum. Minim consectetur aute aliqua excepteur eiusmod magna Lorem consectetur excepteur eiusmod nulla id. Ullamco ipsum irure laboris est sit nisi sint minim culpa anim excepteur aliquip est. Velit minim voluptate voluptate aute ipsum.",
    "title": "enim eu voluptate sunt ut",
    "projectId": "8736fa7d-9563-41f9-982e-603e7fedd94b",
    "id": "fde0f6fa-2c4a-4563-9fa5-918bd82cc028"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "To do",
    "description": "Ex consequat consequat non laboris do incididunt sit id qui qui esse. Elit laborum magna id eiusmod culpa nisi do enim cillum eu eiusmod. Consectetur ipsum tempor ex eiusmod sint non et deserunt elit minim qui enim sint laborum. Amet incididunt commodo reprehenderit anim Lorem exercitation eiusmod aliquip magna officia dolore reprehenderit consequat occaecat. Laborum labore non officia cupidatat quis velit.",
    "title": "labore sit officia culpa consectetur",
    "projectId": "8736fa7d-9563-41f9-982e-603e7fedd94b",
    "id": "920ab031-f707-4513-a337-26f01229f004"
  },
  {
    "assignedTo": {
      "id": "42503252-3979-4df1-afef-c5365a3d542e"
    },
    "state": "In progress",
    "description": "Tempor reprehenderit anim incididunt nulla quis exercitation et ad aliqua aliqua amet consectetur et est. Amet officia fugiat laboris elit consequat. Velit ex exercitation amet voluptate Lorem irure duis consequat amet excepteur aute proident mollit. Et culpa qui id officia laboris culpa in esse minim. Ut incididunt sint id sit deserunt pariatur duis nulla consectetur.",
    "title": "nulla et deserunt elit labore",
    "projectId": "8736fa7d-9563-41f9-982e-603e7fedd94b",
    "id": "7e18de5e-b289-4751-a4db-51719fca9116"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return UUID.create(1);
};

class TaskApi {
  static getTasks(by) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let filteredResult = null;

        if (!by) {
          filteredResult = tasks;
        } else if (by.projectId){
          filteredResult = tasks.filter(task => task.projectId === by.projectId);
        }

        userApi.getUsers()
          .then(users => {
            filteredResult = filteredResult.map(addUsers);

            resolve(Object.assign([], filteredResult));

            function addUsers(result) {
              return Object.assign({}, result,
                {assignedTo: users.find(user => user.id === result.assignedTo.id)}
              );
            }
          });


      }, delay);
    });
  }

  static saveTask(task) {
    task = Object.assign({}, task); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTaskNameLength = 1;
        if (task.name.length < minTaskNameLength) {
          reject(`Name must be at least ${minTaskNameLength} characters.`);
        }

        if (task.id) {
          const existingTaskIndex = tasks.findIndex(a => a.id == task.id);
          tasks.splice(existingTaskIndex, 1, task);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new taskList in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          task.id = generateId(task);
          tasks.push(task);
        }

        resolve(task);
      }, delay);
    });
  }

  static deleteTask(taskId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTaskToDelete = tasks.findIndex(task => {
          task.taskId == taskId;
        });
        tasks.splice(indexOfTaskToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TaskApi;

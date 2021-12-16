import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_CONTACT, DELETE_SELECTED_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../constants/type";

const initialState = {
  contacts: [
    {
      id: "61b8b1b7f726ab72b64efebe",
      isActive: false,
      balance: "$3,949.88",
      picture: "http://placehold.it/32x32",
      age: 30,
      eyeColor: "green",
      name: "French Burks",
      gender: "male",
      company: "STROZEN",
      email: "frenchburks@strozen.com",
      phone: "+1 (838) 415-3930",
      address: "246 Bath Avenue, Hessville, New Hampshire, 9733",
    },
    {
      id: "61b8b1b77d20bc67489e2813",
      isActive: true,
      balance: "$3,548.98",
      picture: "http://placehold.it/32x32",
      age: 28,
      eyeColor: "brown",
      name: "Carmen Calderon",
      gender: "female",
      company: "DUFLEX",
      email: "carmencalderon@duflex.com",
      phone: "+1 (995) 558-2326",
      address: "207 Atkins Avenue, Dana, Washington, 7994",
    },
    {
      id: "61b8b1b7d71948b45554a9d6",
      isActive: true,
      balance: "$1,095.29",
      picture: "http://placehold.it/32x32",
      age: 27,
      eyeColor: "green",
      name: "Caldwell Dudley",
      gender: "male",
      company: "DADABASE",
      email: "caldwelldudley@dadabase.com",
      phone: "+1 (992) 504-2859",
      address: "358 Taaffe Place, Lawrence, Palau, 4480",
    },
    {
      id: "61b8b1b77414868254a7a16a",
      isActive: false,
      balance: "$1,369.19",
      picture: "http://placehold.it/32x32",
      age: 35,
      eyeColor: "blue",
      name: "Silva Carson",
      gender: "male",
      company: "OLYMPIX",
      email: "silvacarson@olympix.com",
      phone: "+1 (848) 510-2635",
      address: "383 Quay Street, Nutrioso, Michigan, 6300",
    },
    {
      id: "61b8b1b76d967d64a1165ea6",
      isActive: true,
      balance: "$1,187.96",
      picture: "http://placehold.it/32x32",
      age: 24,
      eyeColor: "green",
      name: "Bender Fleming",
      gender: "male",
      company: "WARETEL",
      email: "benderfleming@waretel.com",
      phone: "+1 (915) 538-3742",
      address: "513 Garnet Street, Ivanhoe, North Carolina, 9652",
    },
    {
      id: "61b8b1b7476cce62d759fb90",
      isActive: false,
      balance: "$1,602.10",
      picture: "http://placehold.it/32x32",
      age: 24,
      eyeColor: "brown",
      name: "Hurst Cohen",
      gender: "male",
      company: "DAIDO",
      email: "hurstcohen@daido.com",
      phone: "+1 (893) 546-3528",
      address: "356 Newport Street, Tetherow, Hawaii, 3209",
    },
    {
      id: "61b8b1b79d47029669e49b13",
      isActive: true,
      balance: "$3,590.06",
      picture: "http://placehold.it/32x32",
      age: 28,
      eyeColor: "green",
      name: "Lupe Osborne",
      gender: "female",
      company: "KNOWLYSIS",
      email: "lupeosborne@knowlysis.com",
      phone: "+1 (879) 579-3736",
      address: "715 Glenmore Avenue, Kenvil, West Virginia, 7595",
    },
  ],
  editContact: null,
  selectedContacts: []
};

//actions
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter((user) => user.id === action.payload)
      arr = arr.values();
      for(let val of arr) arr = val
      return {
        ...state,
        editContact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact)
      };
    case DELETE_CONTACT:
      return {
      ...state,
      contacts: state.contacts.filter((contact) => contact.id !== action.payload)
    };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: []
      }
    case DELETE_SELECTED_CONTACT:
       return {
         ...state,
         contacts: []
       }
    default:
      return state;
  }
};

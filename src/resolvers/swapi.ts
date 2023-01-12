import axios from "axios";

const resolvers = {
  Query: {
    allPeople: async (_: any, {page}: {page: Number}) => {
      const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      return {
        results: data.results.map(({ name, height, mass, gender, homeworld }: {
          name: string;
          height: string;
          mass: string;
          gender: string;
          homeworld: string;
        }) => ({
            name,
            height,
            mass,
            gender,
            homeworld,
          })),
        next: data.next,
        previous: data.previous
      };
    },
    searchPeople: async (_: any, { name }: { name: string }) => {
      
      const { data } = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
      return data.results.map(({ name, height, mass, gender, homeworld }: {
        name: string;
        height: string;
        mass: string;
        gender: string;
        homeworld: string;
      }) => {
       return{
          name,
          height,
          mass,
          gender,
          homeworld,
        }}
      );
    },
    person: async (_: any, { name }: { name: string }) => {
      
      const { data } = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
      return {
        name: data.results[0].name,
        height: data.results[0].height,
        mass: data.results[0].mass,
        gender: data.results[0].gender,
        homeworld: data.results[0].homeworld
      };
    },
  },
};

export default resolvers;

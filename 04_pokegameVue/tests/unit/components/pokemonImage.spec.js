import { shallowMount } from "@vue/test-utils";
import PokemonImage from '@/components/PokemonImage'

describe('Pokemon Image Component',()=>{

    test('debe de hacer match con el snaptshot', () => {
        const wrapper = shallowMount(PokemonImage,{
            props:{
                pokeId:1,
                showPokemon:false,
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    });

    test('debe de mostrar la imagen oculta y el pokemon 100 ', () => {
        const wrapper = shallowMount(PokemonImage,{
            props:{
                pokeId:100,
                showPokemon:false
            }
        })

        //comprobar que solo se muestra la imagen oculta
        const [img1,img2] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)

        expect(img1.classes('hidden-pokemon')).toBe(true)
    });

    test('debe mostrar el pokemon si el showPicture es true', () => {
        const wrapper = shallowMount(PokemonImage,{
            props:{
                pokeId:100,
                showPokemon:true
            }
        })

        const img1 = wrapper.find('img')

        expect(img1.exists()).toBeTruthy()

        expect(img1.classes('fade-in')).toBe(true)

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

    });
} )
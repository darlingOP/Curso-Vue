import { shallowMount, mount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage'
import { mockPokemons } from "../mocks/pokemons.mock";

describe('PokemonPage Component',() =>{
    let wrapper

    beforeEach(() =>{
        wrapper = shallowMount(PokemonPage)
    })

    test('debe llamar al pokemonArray al montar ', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods,'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()
    });

    test('debe hacer match con el snapshot cuando se monta el componente', () => {

        const wrapper = shallowMount(PokemonPage,{
            data(){
                return{
                    pokemonArr:[mockPokemons],
                    pokemon:mockPokemons[0],
                    showPokemon:false,
                    showAnswer:false,
                    message:''
                }
            }
        })

        expect( wrapper.html()).toMatchSnapshot()

    });

    test('debe de mostrar los componentes pokemonImage y pokemonOptions', () => {
        
        //pokemonImage existe
        //pokemonOptions existe

        //pokemonImage attribute pokeId === 5
        //pokemonOptions attribute options existe
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return{
                    pokemonArr:[mockPokemons],
                    pokemon:mockPokemons[0],
                    showPokemon:false,
                    showAnswer:false,
                    message:''
                }
            }
        })

        //se busca el componente mediante el nombre que tiene en el snapshot creado con el shallowMount
        //ya que es una simulacion de los componentes reales
        const image = wrapper.find('poke-img-stub')
        const options = wrapper.find('poke-opts-stub')
        
        expect(image.exists()).toBeTruthy()
        expect(options.exists()).toBeTruthy()

        expect(image.attributes('pokeid')).toBe('5')
        expect(options.attributes('options')).toBeTruthy()

    });

    test('pruebas con checkanswer', async () => {
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return{
                    pokemonArr:[mockPokemons],
                    pokemon:mockPokemons[1],
                    showPokemon:false,
                    showAnswer:false,
                    message:''
                }
            }
        })

        //se debe esperar a que vue realice la renderizacion
         await wrapper.vm.checkAnswer(10)

        expect(wrapper.find('h2').exists).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`Correcto, era ${mockPokemons[1].name}`)

        await wrapper.vm.checkAnswer(5)
        expect(wrapper.vm.message).toBe(`Oops!... era ${mockPokemons[1].name}`)
    });
})
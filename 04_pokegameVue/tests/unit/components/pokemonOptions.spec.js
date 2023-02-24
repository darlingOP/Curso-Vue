import { shallowMount } from "@vue/test-utils";
import pokeOptions from '@/components/PokemonOptions'
import { mockPokemons } from "../mocks/pokemons.mock";

describe('Pokemon Options Components', () =>{

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(pokeOptions,{
            props:{
                options:mockPokemons
            }
        })
    })

    test('debe de hacer match con el snapshot', () => {
        
        console.log(wrapper.html());

        expect(wrapper.html()).toMatchSnapshot()
    });

    test('debe de mostrar las cuatro opciones correctamente', () => {
        
        const lt = wrapper.findAll('li')
        
        expect(lt.length).toBe(4)

        expect(lt[0].text()).toBe('pikachu')
        expect(lt[1].text()).toBe('charmander')
        expect(lt[2].text()).toBe('venusaur')
        expect(lt[3].text()).toBe('mew') 
    });

    test('debe emitir "selection" con sus respectivos párametros al hacer click', () => {
        const [li1,li2,li3,li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selection').length).toBe(4)
        //wapper.emitted('') devuelve un arreglo con los valores que emitio el evento
        //recordar que en js [] == [] es false, entonces
        expect(wrapper.emitted('selection')[0]).toEqual([5])
        expect(wrapper.emitted('selection')[1]).toEqual([10])
        expect(wrapper.emitted('selection')[2]).toEqual([15])
        expect(wrapper.emitted('selection')[3]).toEqual([20])

    });
})
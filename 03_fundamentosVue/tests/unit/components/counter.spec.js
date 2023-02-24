import {shallowMount, mount} from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    //el wrapper ahora se puede acceder sin tener que estarlo declarando en
    //cada uno de los test
    let wrapper;

    //se pone para que se genere cierta limpieza y no se queden valores de otros test en memoria
    beforeEach(() =>{
        wrapper = shallowMount(Counter)
    })
    // test('debe de hacer match con el snapshot', () => {

    //     //Arrange
    //     const wrapper = shallowMount(Counter)
    //     //Act

    //     //Assert
    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('h2 debe tener el valor por defecto', () => {

    //    const h2 = wrapper.find('h2')
    //    console.log(h2.text());

    //    expect(h2.text()).toBe('Counter')

    expect(wrapper.find('h2').exists()).toBeTruthy()
    const h2Value = wrapper.find('h2').text()
    expect(h2Value).toBe('Counter')

    })

    test('El valor por defecto debe ser 100',()=>{
        

        const pTags = wrapper.find('[data-testid="counter"]')
        expect(pTags.text()).toBe("100")
    })

    test('debe de incrementar y decrementar en 1 el valor del contador', async () =>{


        const [increaseBtn,decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')  
        await increaseBtn.trigger('click') 

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        

        const value =  wrapper.find('[data-testid="counter"]').text()

    
        expect(value).toBe('101')
    })

    //como leer las props
    test('Debe establecer el valor por defecto', () =>{
        
        //const start = wrapper.props('start')
        const {start} = wrapper.props()

        const value =  wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
        //typeof es propio de js y devuelve el tipo que se esta recibiendo en el momento
        console.log(typeof start);
    })

    test('Debe de mostrar la prop title',() =>{

        const title = 'Hola que tal'
        const wrapper = shallowMount(Counter,{
            props:{
                title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)
    })
})
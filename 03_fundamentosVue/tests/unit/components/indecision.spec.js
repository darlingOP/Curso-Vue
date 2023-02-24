import { shallowMount } from "@vue/test-utils"
import Indesicion from '@/components/Indecision'


describe('Indecision Component', () => {

    let wrapper;
    let clgSpy;
    
    //mock de una peticion fetch
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            "answer": "yes",
            "forced": false,
            "image": "https://yesno.wtf/assets/yes/2.gif"
        })
    }))

    beforeEach(() =>{
        wrapper = shallowMount(Indesicion)
        //literalmente espia el comportamiento del objeto y metodo dados
        clgSpy = jest.spyOn(console,'log')

        //limpiar todos los mocks de este test suit
        jest.clearAllMocks()
        
    })


    test('el componente debe hacer match con el snapshot', () =>{

        expect(wrapper.html()).toMatchSnapshot()

    })


    test('escribir en el input no debe disparar nada ',async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm,'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        //se espera que el console log se haya llamado al menos una vez
        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)

        //console.log(wrapper.vm);
    })

    test('escribir el simbolo "?" se debe disparar el getAnswer', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm,'getAnswer')
        const input = wrapper.find('input')
        await input.setValue('Hola mundo?')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(1)
    })

    test('pruebas en getAnswer', async () => {
       await wrapper.vm.getAnswer()

       const img = wrapper.find('img')
       expect(img.exists()).toBeTruthy()
       expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
       expect(wrapper.vm.answer).toBe('Sí!')
    })

    test('pruebas en getAnswer - Fallo en API', async () => {
        
        //simulacion de un error
        fetch.mockImplementationOnce(() => Promise.reject('API is Down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')
        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')

    });
})
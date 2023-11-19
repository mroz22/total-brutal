import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight ">
              T0TALBRUTAL
            </h3>
            <div>
              Veletrzni 826/61 <br />
              170 00 Praha 7
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            info@totalbrutal.cz <br/>
            +420 721761947
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

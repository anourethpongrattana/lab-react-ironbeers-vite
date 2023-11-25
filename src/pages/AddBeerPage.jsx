import { useRef, useCallback } from "react"
import axios from "axios"
function AddBeerPage() {

   const nameInput = useRef()
   const taglineInput = useRef()
   const descriptionInput = useRef()
   const firstBrewedInput = useRef()
   const brewerTipsInput = useRef()
   const attenuationLevelInput = useRef()
   const contributedByInput = useRef()

   const handleSubmit = useCallback((e) => {
      e.preventDefault()
      const beer = {
         name: nameInput.current?.value,
         tagline: taglineInput.current?.value,
         description: descriptionInput.current?.value,
         first_brewed: firstBrewedInput.current?.value,
         brewer_tips: brewerTipsInput.current?.value,
         attenuation_level: attenuationLevelInput.current?.value,
         contributed_by: contributedByInput.current?.value
      }

      axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
      .then((res) => {
         console.log(res)
      })
      .catch((e) => console.error(e))
   }, [])


   return(
      <form onSubmit={(e) => handleSubmit(e)}>
         <div className="input">
            <label htmlFor="name">Name</label>
            <input ref={nameInput} type="text" name="name" />
         </div>
         <div className="input">
            <label htmlFor="tagline">tagline</label>
            <input ref={taglineInput} type="text" name="tagline" />
         </div>
         <div className="input">
            <label htmlFor="description">Description</label>
            <textarea ref={descriptionInput} type="text" name="description" />
         </div>
         <div className="input">
            <label htmlFor="first_brewed">First Brewed</label>
            <input ref={firstBrewedInput} type="text" name="first_brewed" />
         </div>
         <div className="input">
            <label htmlFor="brewer_tips">Brewer tips</label>
            <input ref={brewerTipsInput} type="text" name="brewer_tips" />
         </div>
         <div className="input">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input ref={attenuationLevelInput} type="number" name="attenuation_level" />
         </div>
         <div className="input">
            <label htmlFor="contributed_by">Contributed by</label>
            <input ref={contributedByInput} type="text" name="contributed_by" />
         </div>
         <button type="submit">Submit</button>
      </form>
   )
}

export default AddBeerPage;

import * as React from 'react'

import * as Tone from 'tone'

import './style.scss'

export const DAW = () => {
  const synth = new Tone.Synth().toDestination()

  async function handleClick() {
    await Tone.start()
    console.log('audio is ready')
    //play a middle 'C' for the duration of an 8th note
    const now = Tone.now()
    // trigger the attack immediately
    synth.triggerAttack('C4', now)
    // wait one second before triggering the release
    synth.triggerRelease(now + 1)
  }

  return (
    <div>
      <h2>daw</h2>
      <button onClick={handleClick}>play</button>
    </div>
  )
}

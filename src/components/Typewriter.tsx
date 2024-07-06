import { useEffect } from "react"
import { useScramble } from "use-scramble"

function Typewriter({ input, className }: { input: string, className : string }) {
    const { ref, replay } = useScramble({
        text: input,
        overdrive: false,
        overflow: true,
        scramble: input.length,
        seed: input.length,
        playOnMount: false,
        step: input.length,
    })

    return (
        <h1 className={className} ref={ref} onMouseEnter={replay} />
    )
}

export default Typewriter

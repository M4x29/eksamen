<script defer>
import Nedlasting from '../../installasjon.svelte';
import Tutorial from '../../tutorial.svelte'
import PracticeRange from '../../practice-range.svelte'
import Ai from '../../ai.svelte'
import Unranked from '../../unranked.svelte'
</script>

<main class="flex flex-col w-screen h-screen items-center">
    <section class=" mt-24 flex flex-col w-1/2 gap-16 text-slate-100 text-xl">
        <h1 class="text-6xl">Kom i gang med Overwatch 2!</h1>
        <p>Overwatch 2 kan være veldig gøy når du kommer inn i det, men det er lurt å starte med det grunnleggende først. Det vil du lære hvordan du kan gjøre på denne siden i tillegg til hvordan du laster ned spillet</p>

        <h1 class="text-4xl">Innholdsfortegnelse</h1>
        <ul class="flex flex-col gap-5 -mt-8">
            <li><a href="#nedlasting" class="text-green-500 hover:border-b-2 border-green-500">#Nedlasting</a></li>
            <li><a href="#tutorial" class="text-green-500 hover:border-b-2 border-green-500"> #Tutorial</a></li>
            <li><a href="#practice-range" class="text-green-500 hover:border-b-2 border-green-500">#Practice range</a></li>
            <li><a href="#ai" class="text-green-500 hover:border-b-2 border-green-500">#Spill mot AI</a></li>
            <li><a href="#unranked" class="text-green-500 hover:border-b-2 border-green-500">#Spill mot ekte spillere</a></li>

        </ul>

        <div ><h1 id="nedlasting"class="mb-10 text-4xl">#Nedlasting</h1> <Nedlasting/></div>
        <div> <h1 id="tutorial" class="mb-10 text-4xl">#Tutorial</h1> <Tutorial/></div>
        <div><h1 id="practice-range" class="mb-10 text-4xl">#Practice range</h1><PracticeRange/></div>
        <div><h1 id="ai" class="mb-10 text-4xl">#Spill mot AI</h1><Ai/></div>
        <div><h1 id="unranked" class="mb-10 text-4xl">#Spill mot ekte spillere</h1><Unranked/></div>
          <!-- Mye av teksten og alle bildene som er i disse komponentene kommer fra en tidligere brukerveiledning jeg har skrevet som jeg har modifisert til å passe denne brukerveiledningen. -->
            <footer class="h-36"></footer>
    </section>

</main>

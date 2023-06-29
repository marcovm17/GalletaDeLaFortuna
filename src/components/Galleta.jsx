const Galleta = ({ data }) => {

    return (
    <section className="phrase_card">

        <p>
            {data.phrase}{" "} <i class='bx bxs-quote-alt-right bx-flashing' ></i>
        </p>
            
        <span>
            Escrito por "{data.author}"
        </span>

    </section>
    );
};

    export default Galleta
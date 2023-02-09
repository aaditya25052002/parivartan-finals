import React from "react";
import { Typography } from "@mui/material";
const Documentation = () => {
  return (
    <div className="ml-8 mt-8">
      <Typography variant="h2" color="white" className="underline">
        Parivatan
      </Typography>
      <Typography variant="h6" color="white" mt={4} ml={2} mr={2}>
        The fraudulent malpractices have eroded the trust between artists and
        collectors. By leveraging the tools of decentralization, we believe that
        we can restore this trust. 'Parivartan' is a community of art
        enthusiasts and an NFT marketplace where you can create, buy and sell
        NFTs of legitimate, verified artwork. If a creator wants to sell their
        artwork, they can mint their work as an NFT and publicly list it on
        Parivartan, which opens the doors for a much larger audience of esteemed
        collectors, and novice enthusiasts. Interested buyers can easily
        purchase the artwork using any crypto wallet. Royalties will be paid to
        the original artist for each subsequent sale of their work. To ensure
        the authenticity of the artwork, we have a two-step verification system:
        first, the seller will undergo an onboarding process that requires them
        to provide a certificate of provenance from the artist, or a reputed
        gallery. Second, a legal personal document of the owner to
        prevent identity fraud.
      </Typography>
      <Typography variant="h4" color="white" mt={4} className="underline">
        What is the problem we are trying to solve?
      </Typography>
      <Typography variant="h7" color="white" ml={4} mr={4}>
        <ul className="list-disc">
          <li>
            Indian handicraft industry is expanding at a rapid rate, with over
            25.7% year-over-year increase in sales.
          </li>
          <li>
            {" "}
            Despite this surge, artists still struggle due to exploitation by
            cunning collectors, their inability to command prices, and the low
            revenue generated since most of it is handmade and can’t be
            mass-produced.
          </li>
          <li>
            {" "}
            This has driven a lot of artisans away from these professions,
            thereby slowly depriving Gujarat of its pride: its heritage and
            culture.
          </li>
        </ul>
      </Typography>
      <Typography variant="h4" color="white" mt={2} className="underline">
        How do we plan to solve it?
      </Typography>
      <Typography variant="h7" color="white" ml={4} mr={4}>
        We plan to introduce a new revenue stream for artists and experts that
        makes their careers more sustainable and lucrative.
        <ol className="list-decimal ml-8 mt-1">
          <li>Minting and selling NFTs of their physical art</li>
          <li>
            A recurring royalty fee to the original artists on subsequent sale
            of their NFTs.
          </li>
          <li>
            Experts that are paid a fee for verifying the certificate of
            provenance for the underlying artwork.
          </li>
        </ol>
      </Typography>
    </div>
  );
};

export default Documentation;

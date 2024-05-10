import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { CONTRACT_ABI } from "./contractABI";

const contractAddress = "0x1cdFf5AaD387F2c4EB076892eBBE98F0B158a02d";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: CONTRACT_ABI,
});
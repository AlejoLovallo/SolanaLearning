import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { DummySplToken } from '../target/types/dummy_spl_token';

describe('dummy_spl_token', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.DummySplToken as Program<DummySplToken>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});

<script>
  import SecretariasList from "../../components/features/secretariasList/SecretariasList.svelte";
  import SecretariasForm from "../../components/features/secretariasForm/SecretariasForm.svelte";
  import { getSecretarias } from "../../services/secretarias/secretariasService";
  import { onMount } from "svelte";

  let dataSecretarias = [];

  const fetchSecretarias = async () => {
    dataSecretarias = await getSecretarias();
    console.log(dataSecretarias);
  };

  onMount(() => {
    fetchSecretarias();
  });
</script>

<!-- Form -->
<SecretariasForm {fetchSecretarias} />
<!-- Fetch -->
<SecretariasList {dataSecretarias} {fetchSecretarias} />

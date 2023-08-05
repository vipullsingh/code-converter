document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('codeInput');
    const languageSelect = document.getElementById('languageSelect');
    const convertCodeBtn = document.getElementById('convertCodeBtn');
    const conversionResult = document.getElementById('conversionResult');
  
    convertCodeBtn.addEventListener('click', async () => {
      const code = codeInput.value;
      const language = languageSelect.value;
      const response = await convertCode(code, language);
      conversionResult.innerHTML = response.ans;
    });
  
    async function convertCode(code, language) {
      const url = `http://localhost:8080/convert-code/${language}`;
      const body = { code };
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
  
        if (!response.ok) {
          throw new Error('Request failed');
        }
  
        return await response.json();
      } catch (error) {
        console.error('Error:', error.message);
        return { ans: 'An error occurred during code conversion.' };
      }
    }
  });
  
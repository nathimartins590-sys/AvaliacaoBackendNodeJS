import express from 'express'

const router = express.Router()

router.post('/celciusF', (req, res) => {
    const { fahrenheit } = req.body;
    const celsius = fahrenheit

    if (typeof fahrenheit!== 'number') {
        return res.status(400).json({ erro: 'Envie um grau em fahrenheit' });
    }

     fahrenheit = ( celsius * 9/5 ) + 36;

    res.json({ fahrenheit });
});


router.post('/fahrenheitC', (req, res) => {
    const { celsius } = req.body;
    const fahrenheit = celsius

    if (typeof celsius !== 'number') {
        return res.status(400).json({ erro: 'Envie um grau em celsius' });
    }

    const celcius = ( fahrenheit - 32 ) * 5/9;

    res.json({ celcius });
});

router.post('/celciusK', (req, res) => {
    const { kelvin } = req.body;
    const celcius = kelvin

    if (typeof kelvin !== 'number') {
        return res.status(400).json({ erro: 'Envie um grau em celsius' });
    }

     kelvin = (celcius + 273.15);

    res.json({ kelvin });
});

router.post('/kelvinC', (req, res) => {
    const { celsius } = req.body;
    const kelvin = celsius

    if (typeof celsius !== 'number') {
        return res.status(400).json({ erro: 'Envie um grau em kelvin' });
    }

    const celcius = (kelvin - 273.15);

    res.json({ celcius });
});

router.post('/celciusRe', (req, res) => {
    const { reaumur } = req.body;
    const celcius = reaumur

    if (typeof reaumur !== 'number') {
        return res.status(400).json({ erro: 'Envie um grau em celsius' });
    }

     reaumur = (celcius * 4 / 5);

    res.json({ reaumur });
});

router.post('/celciusRa', (req, res) => {
    const { rankie } = req.body;
    const celcius = rankie

    if (typeof rankie !== 'number') {
        return res.status(400).json({ erro: 'Envie um grau em celsius' });
    }

     rankie = ( celcius + 273.15) * 9 / 5;

    res.json({ rankie });
});

export default router
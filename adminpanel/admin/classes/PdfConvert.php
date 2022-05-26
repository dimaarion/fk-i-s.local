<?php

class PdfConvert{

    function coverImagePath(string $pdfFileName)
{
    $poster = pathinfo($pdfFileName, PATHINFO_FILENAME);
    return __DIR__ . "/covers/$poster.jpg";
}

function createPoster(string $pdfFile)
{
    
    if(is_file($pdfFile)){
     print_r(getimagesize($pdfFile))  ;
    } else{
        echo "no files";
    }
   
   // $firstPage = [0]; // первая страница
    // читаем первую страницу из файла
    //$im->setImageFormat('jpg'); // устанавливаем формат jpg
    //file_put_contents($this->coverImagePath($pdfFile), $im); // сохраняем файл в папку
    //$im->clear(); // очищаем используемые ресурсы
}

public function isDirPdf(string $RootDir)
{

$files = new DirectoryIterator($RootDir);
foreach($files as $file)
{
    // если файл - . или .. - пропускаем
    if($file->isDot())
        continue;

    // получаем полный путь к файлу
    $filePath = $RootDir . DIRECTORY_SEPARATOR . $file->getFilename();

    if($file->isFile() && $file->getExtension() === 'pdf')
    {
        $posterFile = new SplFileInfo($this->coverImagePath($filePath));
        if($posterFile->isFile()) continue;

        $this->createPoster($filePath);
        print($filePath . PHP_EOL);
    }
}


}
    
    
}
<div id="images" class="col text-center">

  <?php
  $controller->includer(
    true,
    true,
    './admin/template/headtitle.php',
    $controller,
    'Файлы',
    ''
  );
  ?>
  <form id="filesForm" enctype="multipart/form-data" action="/adminpanel/files/load" method="post">
    <div class="row mt-3">
      <div class="col-3">
        <?php
        $controller->inputs(
          [
            'type' => 'submit',
            'name' => 'upload_files',
            'value' => 'Сохранить',

          ]
        );
        ?>
      </div>
      <div class="col-sm">
        <select class="form-control form-select" name="urlDir" aria-label="Default select example">
          <option value="/img/upload/">Основная папка </option>
          <?php
          foreach ($x as $key => $value) :
            if (is_dir($_SERVER['DOCUMENT_ROOT'] . $x2 . $value)) :
          ?>

              <option value="<?php echo $x2 . $value; ?>"><?php echo $value; ?></option>
          <?php
            endif;
          endforeach; ?>
        </select>
      </div>
      <div class="col">
        <span class="fileSpan"></span>
        <div class="custom-file form-control">

          <input type="file" class="custom-file-input text-left" name="files" id="customFileLangHTML">
          <label class="custom-file-label text-left fileInput" for="customFileLangHTML" data-browse="Загрузить файл">Выбрать
            файл</label>
        </div>
      </div>
    </div>
    <div class="container">

      <label for="createDir" class="form-label">Создать папку</label>
      <input type="txt" class="form-control" name="createDir" id="createDir" placeholder="Название папки">


    </div>
    <div class="container  mt-3 images_block">

      <div class="col mb-3" id="btn_filter_img">
        <div data="pdf" class="btn btn-primary"> PDF</div>
        <div data="png" class="btn btn-primary"> PNG</div>
        <div data="jpg" class="btn btn-primary"> JPG</div>
        <div data="doc" class="btn btn-primary"> DOC</div>
        <div data="djvu" class="btn btn-primary">DJVU</div>
        <div data="dir" class="btn btn-primary"> Папки</div>
        <div data="files" class="btn btn-primary"> Все</div>
      </div>
      <div class="form-group col-sm ">
        <input value="" class="form-control form-control-lg" type="text" name="searh" id="searh" placeholder="Поиск статьи">
      </div>
      <div class="row imageGalleryBox" id= "imageGalleryBox">

        <?php
        function imgFilter($val)
        {
          preg_match('/\.\w+/', $val, $imageR);
          preg_match('/[a-z_A-Z_0-9 ]+/', $imageR[0], $imageR);




          $iR = $imageR[0];
          if ($iR == 'pdf' || $iR == 'PDF') {
            $img = '/img/icon/pdf.png';
          } else if ($iR == 'doc' || $iR == 'DOC') {
            $img = '/img/icon/doc.jpg';
          } else if ($iR == 'djvu' || $iR == 'DJVU') {
            $img = '/img/icon/djvu.png';
          } else {
            $img = "/img/upload/" . $val;
          }
          return $img;
        }

        foreach ($x as $key => $value) :
          if ($controller->id) {
            $controller->includer(true, true, './admin/template/galleryFiles.php', $controller, ['img' => $img, 'value' => $value], $x2);
          }
          if (preg_match('/' . $controller->nmenu . '/', $value) && $controller->page == 'files') :
            $img =   imgFilter($value);

            $controller->includer(true, true, './admin/template/galleryFiles.php', $controller, ['img' => $img, 'value' => $value], $x2);
          endif;
          if ($controller->page != 'files') :
            $img =   imgFilter($value);
          //  $controller->includer(true, true, './admin/template/galleryFiles.php', $controller, ['img' => $img, 'value' => $value],$x2);
          endif;
        endforeach;
        ?>
      </div>
    </div>
  </form>
  <div id="settinsPanel"></div>
</div>
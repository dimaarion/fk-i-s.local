<div
id="images"
class="col text-center">
</div>
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
<form
id="filesForm"
enctype="multipart/form-data"
action="/adminpanel/files/load"
method="post">
  <div
  class="row mt-3">
    <div
    class="col-3">
      <?php

      $controller->inputs(
        [
          'type' => 'submit',
          'name' => 'upload_files',
          'value' => 'Сохранить',

        ]
      );
$txt = <<<HERE
 <div class="col-sm-2 row images">
            <div class="col">
              <div class="titleImg"><?php echo $value; ?></div>
              <img width="100%" src="<?php echo $img; ?>" alt="<?php echo $img; ?>" >
            </div>
            <button class="text-right deleteF" name="idfiles" value="../img/upload/<?php echo $value; ?>">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
              </svg>
            </button>
          </div>
HERE;

      ?>

    </div>
    <div class="col">
      <div class="custom-file form-control">
        <input type="file" class="custom-file-input" name="files" id="customFileLangHTML">
        <label class="custom-file-label" for="customFileLangHTML" data-browse="Загрузить файл">Выбрать файл</label>
      </div>
    </div>
  </div>
  <div class="container  mt-3 images_block">
    <?php if ($controller->page == 'files') : ?>
      <div class="col mb-3">
        <a href="/adminpanel/files/pdf" class="btn btn-primary"> PDF</a>
        <a href="/adminpanel/files/png" class="btn btn-primary"> PNG</a>
        <a href="/adminpanel/files/jpg" class="btn btn-primary"> JPG</a>
        <a href="/adminpanel/files/doc" class="btn btn-primary"> DOC</a>
        <a href="/adminpanel/files/djvu" class="btn btn-primary"> DJVU</a>
      </div>
    <?php endif; ?>
    <div class="row">
      <?php
      function imgFilter($val)
      {
        preg_match('/\.\w+/', $val, $imageR);
        preg_match('/[a-z]+/', $imageR[0], $imageR);
        $iR = $imageR[0];
        if ($iR == 'pdf') {
          $img = '/img/icon/pdf.png';
        } else if ($iR == 'doc') {
          $img = '/img/icon/doc.jpg';
        } else if ($iR == 'djvu') {
          $img = '/img/icon/djvu.png';
        } else {
          $img = "/img/upload/" . $val;
        }
        return $img;
      }
      foreach ($x as $key => $value) :
        if (preg_match('/' . $controller->nmenu . '/', $value) && $controller->page == 'files') :
          $img =   imgFilter($value);
      ?>

          <div
          class="col-sm-2 row images">
            <div
            class="col">
            <div
            class="titleImg">
              <?php echo $value; ?>
            </div>
              <img
              width="100%"
              src="<?php echo $img; ?>"
              alt="<?php echo $img; ?>">
            </div>
            <div class="buttonImg">
              <button
              class="text-right deleteF"
              name="idfiles"
              value="../img/upload/<?php echo $value; ?>">
                <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-trash-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                  <path
                  fill-rule="evenodd"
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                </svg>
              </button>
            </div>

          </div>
        <?php
      endif;
      if($controller->page != 'files') :
          $img =   imgFilter($value);
        ?>

          <div
          class="col-sm-2 row images">
            <div
            class="col">
            <img
            width="100%"
            src="<?php echo $img; ?>"
            alt="<?php echo $img; ?>"
            title="<?php echo $img; ?>">
          </div>
            <button
            class="text-right deleteF"
            name="idfiles"
            value="../img/upload/<?php echo $value; ?>">
              <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-trash-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
                <path
                fill-rule="evenodd"
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
              </svg>
            </button>
          </div>
      <?php
        endif;
      endforeach;
      ?>
    </div>
  </div>
</form>